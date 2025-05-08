#!/bin/bash

echo "🚀 Starting local server..."
echo "📂 Serving from: $(pwd)"
echo "🌐 Access the site at: http://localhost:8000"
echo "💡 Press Ctrl+C to stop the server"
echo "----------------------------------------"

python3 -m http.server 8000 