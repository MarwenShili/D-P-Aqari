import "./_Tag.scss";

function Tag({ title, icon, color, background, value }) {
  return (
    <div className="tag" style={{ background: background }}>
      {icon && <img src={icon} alt="" />}
      <p className="name" style={{ color: color }}>
        <span className="value">{value}</span> {title}
      </p>
    </div>
  );
}

export default Tag;
