import "./_Tag.scss";

function Tag({ title, icon, color, background }) {
  return (
    <div className="tag" style={{ background: background }}>
      {icon && <img src={icon} alt="" />}
      <p className="name" style={{ color: color }}>
        {title}
      </p>
    </div>
  );
}

export default Tag;
