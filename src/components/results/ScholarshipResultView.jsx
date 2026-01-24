import React from 'react';
import { useLocation } from 'react-router-dom';
import Back from '../common/back/Back';
import './ScholarshipResultView.css';

const ScholarshipResultView = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const link = params.get('link') || '';

  const getPreviewUrl = (url) => {
    if (!url) return '';
    const trimmed = url.trim();
    const driveMatch = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    if (trimmed.includes('drive.google.com') && trimmed.includes('preview')) {
      return trimmed;
    }
    return trimmed;
  };

  return (
    <>
      <Back title='Answer Sheet' />
      <section className='answer-sheet'>
        <div className='container'>
          <div className='answer-sheet-card'>
            <h2>Answer Sheet</h2>
            {link ? (
              <div className='answer-sheet-frame'>
                <iframe
                  title='Answer Sheet Full View'
                  src={getPreviewUrl(link)}
                  frameBorder='0'
                  allow='autoplay'
                />
              </div>
            ) : (
              <p className='answer-sheet-empty'>No link available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipResultView;
