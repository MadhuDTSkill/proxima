import { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { WiStars } from "react-icons/wi";

const Prompt = ({ setStaticPrompt, setPrompt, prompt, onSubmit, isLoading, isStreaming }) => {
  const [rows, setRows] = useState(1);

  const handleTextChange = (event) => {
    const textareaLineHeight = 24;
    const previousRows = event.target.rows;
    event.target.rows = 1; // Reset number of rows in the textarea

    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight) - 1;
    const maxRows = 10;
    const newRows = Math.min(currentRows, maxRows);
    if (currentRows === previousRows) {
      event.target.rows = newRows || 1;
    }

    setRows(currentRows);
    setPrompt(event.target.value);
    setStaticPrompt(event.target.value);
  };

  const goForSubmit = () => {
    if (prompt?.trim() !== '' && !isLoading) {
      setRows(1);
      onSubmit();
    }
  };

  // Prevent form submission on Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      goForSubmit();
    }
  };

  useEffect(() => {
    const ele = document.getElementById('input-box')
    if (ele) {
      ele.focus();
    }
  }, []);

  return (
    <div className="relative pb-1.5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goForSubmit();
        }}
      >
        <div className="relative flex items-center">
          {/* Left Icon */}
          <WiStars className="absolute left-3 text-main" size={30} />

          <textarea
            id='input-box'
            value={prompt}
            onChange={handleTextChange}
            onKeyDown={handleKeyDown}
            rows={rows}
            placeholder="Message to Proxima..."
            maxLength={8000}
            className={`pl-12 pr-12 ${rows > 2 ? 'rounded-2xl' : 'rounded-full' }  shadow-md shadow-gray-400 p-3 border-t w-full bg-transparent outline-none`}
            style={{ resize: 'none', overflow: 'hidden' }}
          />

          {/* Right Icon */}
          <button
            type="submit"
            className="absolute right-0 bg-main rounded-full p-2.5 m-1 text-white"
            disabled={prompt?.trim() === '' || isLoading}
          >
            <FaPaperPlane className='text-white' size={20} />
          </button>
        </div>
      </form>
      <div className='pb-2'>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Prompt;
