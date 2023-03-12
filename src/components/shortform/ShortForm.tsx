import React from "react";
import "./shortform.css";
import { useState, FormEvent, useEffect } from "react";

const ShortForm = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState("");

  const [shortenedUrls, setShortenedUrls] = useState<string[]>(
    () => JSON.parse(localStorage.getItem("shortenedUrls")!) || []
  );

  const [longUrls, setlongUrls] = useState<string[]>(
    () => JSON.parse(localStorage.getItem("longUrls")!) || []
  );

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("shortenedUrls", JSON.stringify(shortenedUrls));
    localStorage.setItem("longUrls", JSON.stringify(longUrls));
  }, [shortenedUrls, longUrls]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputUrl) {
      setError("Please add a link");
      return;
    }
    setError("");
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputUrl}`
      );
      const data = await response.json();
      const originalLink = data.result.original_link;
      const endIndex = originalLink.indexOf(".com") + 4;
      const shortOriginal = originalLink.substring(0, endIndex) + "...";
      setShortenedUrls([...shortenedUrls, data.result.short_link]);
      setlongUrls([...longUrls, shortOriginal]);
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
    const shortenedUrlsCopy = [...shortenedUrls];
    const longUrlsCopy = [...longUrls];
    shortenedUrlsCopy.splice(index, 1);
    longUrlsCopy.splice(index, 1);
    setShortenedUrls(shortenedUrlsCopy);
    setlongUrls(longUrlsCopy);
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
      {shortenedUrls.length > 0 && (
        <div>
          <ul className="url-list" data-testid="url-list">
            {shortenedUrls.map((url, index) => (
              <li key={index} className="url-list--item">
                <span className="url-list--item--original">
                  {longUrls[index]}
                </span>
                <hr />
                <span className="url-list--item--shortened">{url}</span>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(url, index)}
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
