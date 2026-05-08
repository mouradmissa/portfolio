function Lights() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} color="#ffd6b0" />
      <pointLight position={[-3, 1, 3]} intensity={1.4} color="#ff7a00" />
      <pointLight position={[2, -2, -2]} intensity={0.7} color="#7a8fff" />
    </>
  )
}

export default Lights
