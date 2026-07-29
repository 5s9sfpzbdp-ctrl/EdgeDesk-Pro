import { menu } from "../data/menu";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>EdgeDesk</h2>

      {menu.map(item => (
        <div className="menu-item" key={item.id}>
          <span>{item.icon}</span>
          <span>{item.title}</span>
        </div>
      ))}
    </aside>
  );
}