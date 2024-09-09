const Breadcrumbs = ({parent}) => {
  return (
    <div>
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{
          backgroundImage: "url('/img/breadcrumbs-bg.jpg')",
        }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>{parent}</h2>
          <ol>
            <li>
              <a href="./">Home</a>
            </li>
            <li>{parent}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
