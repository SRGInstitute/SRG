import React from 'react';
import Heading from '../../common/heading/Heading';
import './TopPerformers.css';

const TopPerformers = () => {
  // Static data for top 3 typing scores
  const topTyping = [
    {
      studentId: 'SRG001',
      studentName: 'Rajesh Kumar',
      wpm: 85.5,
      accuracy: 98.2
    },
    {
      studentId: 'SRG002',
      studentName: 'Priya Sharma',
      wpm: 82.3,
      accuracy: 96.8
    },
    {
      studentId: 'SRG003',
      studentName: 'Amit Singh',
      wpm: 78.9,
      accuracy: 95.5
    }
  ];

  // Static data for top 3 quiz scores
  const topQuiz = [
    {
      studentId: 'SRG004',
      studentName: 'Sneha Patel',
      score: 95,
      totalMarks: 100,
      percentage: 95.0
    },
    {
      studentId: 'SRG005',
      studentName: 'Vikram Mehta',
      score: 92,
      totalMarks: 100,
      percentage: 92.0
    },
    {
      studentId: 'SRG006',
      studentName: 'Anjali Desai',
      score: 90,
      totalMarks: 100,
      percentage: 90.0
    }
  ];

  return (
    <section className='top-performers'>
      <div className='container'>
        <Heading subtitle='CHAMAKTE SITARE' title='SRG Top Performers' />
        
        <div className='performers-grid'>
          {/* Typing Master Top 3 */}
          <div className='performers-section'>
            <h2 className='section-title'>
              <i className='fa fa-keyboard'></i> Typing Master
            </h2>
            <div className='performers-list'>
              {topTyping.map((performer, index) => (
                <div key={index} className='performer-card'>
                  <div className={`rank-badge rank-${index + 1}`}>
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                  </div>
                  <div className='profile-image-wrapper'>
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(performer.studentName)}&size=80&background=random&color=fff&bold=true`}
                      alt={performer.studentName}
                      className='profile-image'
                    />
                    <div className='star-icon'>⭐</div>
                  </div>
                  <div className='performer-info'>
                    <h3>{performer.studentName}</h3>
                    <p className='student-id'>ID: {performer.studentId}</p>
                    <div className='score-details'>
                      <span className='score-item'>
                        <strong>WPM:</strong> {performer.wpm.toFixed(1)}
                      </span>
                      <span className='score-item'>
                        <strong>Accuracy:</strong> {performer.accuracy.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Top 3 */}
          <div className='performers-section'>
            <h2 className='section-title'>
              <i className='fa fa-question-circle'></i> Quiz
            </h2>
            <div className='performers-list'>
              {topQuiz.map((performer, index) => (
                <div key={index} className='performer-card'>
                  <div className={`rank-badge rank-${index + 1}`}>
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                  </div>
                  <div className='profile-image-wrapper'>
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(performer.studentName)}&size=80&background=random&color=fff&bold=true`}
                      alt={performer.studentName}
                      className='profile-image'
                    />
                    <div className='star-icon'>⭐</div>
                  </div>
                  <div className='performer-info'>
                    <h3>{performer.studentName}</h3>
                    <p className='student-id'>ID: {performer.studentId}</p>
                    <div className='score-details'>
                      <span className='score-item'>
                        <strong>Score:</strong> {performer.score.toFixed(1)}/{performer.totalMarks.toFixed(1)}
                      </span>
                      <span className='score-item'>
                        <strong>Percentage:</strong> {performer.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPerformers;

