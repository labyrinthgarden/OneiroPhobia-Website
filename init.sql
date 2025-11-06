-- init.sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo (opcional)
INSERT INTO users (email, name) VALUES 
('usuario@ejemplo.com', 'Usuario Ejemplo')
ON CONFLICT (email) DO NOTHING;
