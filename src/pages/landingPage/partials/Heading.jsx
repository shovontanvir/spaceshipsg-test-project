const Heading = (props) => {
  return (
    <div>
      <h1>{props.headingText}</h1>
      <p>{props.descriptionParagraph}</p>
    </div>
  );
};

export default Heading;
