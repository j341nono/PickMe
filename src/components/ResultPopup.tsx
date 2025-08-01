export default function ResultPopup({ name, onClose }: { name: string, onClose: () => void }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex", justifyContent: "center", alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 8,
        textAlign: "center"
      }}>
        <h2 style={{ color: "#000" }}>The chosen one was...</h2>
        <p style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#000"
        }}>
          {name}
        </p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
}