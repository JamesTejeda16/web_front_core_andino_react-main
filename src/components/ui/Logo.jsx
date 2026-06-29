/**
 * Logo de marca de Banco Pichincha.
 * Isotipo: bloques geométricos azul y amarillo — identidad corporativa moderna.
 *
 * @param {Object} props
 * @param {number} [props.size=44]      Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true] Mostrar el texto "Banco Pichincha".
 * @param {'dark'|'light'} [props.variant='dark'] Color del texto.
 */

// Bloques: posición + color (azul Pichincha y amarillo).
const BLOQUES = [
  { x: 8, y: 8, c: '#003DA5' }, // azul - arriba izq
  { x: 26, y: 8, c: '#FFD100' }, // amarillo - arriba der
  { x: 8, y: 26, c: '#FFD100' }, // amarillo - abajo izq
  { x: 26, y: 26, c: '#003DA5' }, // azul - abajo der
]

export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#003DA5'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.8)' : '#666666'
  // El texto escala con el tamaño del isotipo.
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Banco Pichincha"
        role="img"
      >
        {/* Bloques de la identidad */}
        {BLOQUES.map((b, idx) => (
          <rect
            key={idx}
            x={b.x}
            y={b.y}
            width="14"
            height="14"
            rx="2"
            fill={b.c}
          />
        ))}
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            Banco Pichincha
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 700,
              color: subColor,
              letterSpacing: '1.2px',
            }}
          >
            CORE FINANCIERO
          </span>
        </span>
      )}
    </span>
  )
}
