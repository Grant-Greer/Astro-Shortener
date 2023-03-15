import React, { useState, FormEvent, useEffect } from "react";
import "./shortform.css";

const ShortForm = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState("");

  const [urlData, setUrlData] = useState<{ long: string; short: string }[]>(
    () => JSON.parse(localStorage.getItem("urlData")!) || []
  );

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("urlData", JSON.stringify(urlData));
  }, [urlData]);

  const fetchShortenedUrl = async (url: string) => {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    return data.result;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputUrl) {
      setError("Please add a link");
      return;
    }
    setError("");
    try {
      const result = await fetchShortenedUrl(inputUrl);
      const originalLink = result.original_link;

      // Extract the base URL including the top-level domain
      const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/i;
      const match = originalLink.match(regex);
      const shortOriginal = match ? `${match[0]}...` : originalLink;

      setUrlData((prevUrlData) => [
        ...prevUrlData,
        { long: shortOriginal, short: result.short_link },
      ]);

      setInputUrl("");
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = (url: string, index: number) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedIndex(index);
    });
  };

  const removeFromStorage = (index: number) => {
    setUrlData((prevUrlData) => {
      const updatedUrlData = [...prevUrlData];
      updatedUrlData.splice(index, 1);
      return updatedUrlData;
    });
  };

  return (
    <div className="short-form--container">
      <form onSubmit={handleSubmit} className="short-form">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Shorten a link here..."
          className={`short-form--input${
            error ? " short-form--input--error" : ""
          }`}
        />
        {error && <p className="input-error">{error}</p>}

        <button type="submit" className="short-form--button">
          Shorten It!
        </button>
      </form>
      {urlData.length > 0 && (
        <div>
          <ul className="url-list" data-testid="url-list">
            {urlData.map(({ long, short }, index) => (
              <li key={index} className="url-list--item">
                <span className="url-list--item--original">{long}</span>
                <hr />
                <span className="url-list--item--shortened">{short}</span>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(short, index)}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
                <button
                  className="copy-button"
                  onClick={() => removeFromStorage(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShortForm;
