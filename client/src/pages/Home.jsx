import React from 'react';

const Home = () => {
  return (
    <>
      <div>
        <h1 style={{ color: 'brown', fontWeight: 'bold', fontSize: 48, marginLeft: 60 }}>Do you want to organize an event?</h1>
      </div>

      <div style={{ textAlign: 'right' }}>
        <h1 style={{ color: 'blue', fontWeight: 'bold', fontSize: 60, marginRight: 60 }}>Then, we are ready to</h1>
        <h1 style={{ color: 'blue', fontWeight: 'bold', fontSize: 60, marginRight: 155 }}>arrange it for you.</h1>
      </div>

      <div className="max-w-3/4 mx-auto p-4" style={{ position: 'relative', width: 'calc(100% - 150px)' }}>
        <h3 className="text-xl ml-4" style={{ position: 'absolute', left: '0%', transform: 'translateX(0%)', width: '40%' }}>We can arrange your indoor events according to your requirements. Contact us to arrange your seminars, product launches, and get-togethers, etc., as per your needs.</h3>
        <img src="https://api.time.com/wp-content/uploads/2022/02/order-of-countries-opening-ceremony-beijing.jpg" alt="Event" style={{ position: 'absolute', right: 0, top: 0, bottom: 10, width: '600px', height: '350px' }} />
      </div>
    </>
  );
};

export default Home;
