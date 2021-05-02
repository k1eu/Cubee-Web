const FormattedTime = ({time}) => {
  return (
    <>
      <span>
        {time / 100 / 60 >= 1
          ? Math.floor(time / 100 / 60)
          : "00"}
      </span>
      <span>.</span>
      <span>
        {time / 100 >= 1
          ? Math.floor(time / 100) >= 10
            ? Math.floor(time / 100)
            : "0" + Math.floor(time / 100)
          : "00"}
      </span>
      <span>:</span>
      <span>{time === 0 ? "00" : time.toString().slice(-2)}</span>
    </>
  );
};

export default FormattedTime