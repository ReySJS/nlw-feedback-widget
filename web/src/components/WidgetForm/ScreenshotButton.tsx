import { useState } from 'react';
import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';

import { Loading } from '../Loading';

interface PropTypes {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  onScreenShotTook,
}: PropTypes) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenShotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-brand-300 border-2 flex justify-end items-end text-note hover:brightness-125 focus:ring-2 focus:ring-offset-2 focus:ring-offset-body-100 focus:ring-brand-500 transition-colors focus:outline-none"
        onClick={() => onScreenShotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" className='text-note' />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-body-100 border border-brand-300 rounded-md hover:brightness-125 focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-300 focus:ring-brand-500 transition-colors focus:outline-none group"
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-note opacity-50  group-hover:opacity-100" />
      )}
    </button>
  );
};
