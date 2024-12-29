const Today = ({ todate }) => {
  return (
    <div>
      <div>오늘은</div>
      <h1>{todate.toDateString()}</h1>
    </div>
  );
};

export default Today;
