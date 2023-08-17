import "./_Tag.scss";

function Tag({ title, icon, color, background, value, colorValue }) {
  return (
    <div className="tag" style={{ background: background }}>
      {icon && <img src={icon} alt="" />}
      <p className="name" style={{ color: color }}>
        <span style={{ color: colorValue }} className="value">
          {value}
        </span>{" "}
        {title}
      </p>
    </div>
  );
}

export default Tag;
