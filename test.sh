#!/bin/bash

# Script to update the file structure for Amour Editorial website
# Run from the root directory: amour-editorial-website/

# Exit on error
set -e

# Root directories
FRONTEND_DIR="amour-next-ts"
BACKEND_DIR="amour-Backend"

# Create frontend directories and files
echo "Updating frontend structure in $FRONTEND_DIR..."

# Create pages in src/app/ (Next.js App Router)
mkdir -p $FRONTEND_DIR/src/app/about
mkdir -p $FRONTEND_DIR/src/app/services
mkdir -p $FRONTEND_DIR/src/app/testimonials
mkdir -p $FRONTEND_DIR/src/app/faqs
mkdir -p $FRONTEND_DIR/src/app/resources
mkdir -p $FRONTEND_DIR/src/app/blog
mkdir -p $FRONTEND_DIR/src/app/contact
mkdir -p $FRONTEND_DIR/src/app/privacy-policy
mkdir -p $FRONTEND_DIR/src/app/terms
mkdir -p $FRONTEND_DIR/src/app/admin/{pages,testimonials,faqs}

# Create placeholder page.tsx files (only if they don't exist)
for page in about services testimonials faqs resources blog contact privacy-policy terms admin admin/pages admin/testimonials admin/faqs; do
  if [ ! -f "$FRONTEND_DIR/src/app/$page/page.tsx" ]; then
    cat <<EOL > $FRONTEND_DIR/src/app/$page/page.tsx
import { FC } from 'react';

const ${page##*/}Page: FC = () => {
  return (
    <div>
      <h1>${page##*/} Page</h1>
      {/* Add content here */}
    </div>
  );
};

export default ${page##*/}Page;
EOL
    echo "Created $FRONTEND_DIR/src/app/$page/page.tsx"
  else
    echo "Skipping $FRONTEND_DIR/src/app/$page/page.tsx (already exists)"
  fi
done

# Create frontend components
mkdir -p $FRONTEND_DIR/src/components
touch $FRONTEND_DIR/src/components/Footer.tsx
touch $FRONTEND_DIR/src/components/ServiceItem.tsx
touch $FRONTEND_DIR/src/components/TestimonialCard.tsx
touch $FRONTEND_DIR/src/components/AdminLayout.tsx
touch $FRONTEND_DIR/src/components/BookingWidget.tsx

# Create placeholder content for new components (only if they don't exist)
for component in Footer ServiceItem TestimonialCard AdminLayout BookingWidget; do
  if [ ! -s "$FRONTEND_DIR/src/components/$component.tsx" ]; then
    cat <<EOL > $FRONTEND_DIR/src/components/$component.tsx
import { FC } from 'react';

const $component: FC = () => {
  return <div>$component Component</div>;
};

export default $component;
EOL
    echo "Created $FRONTEND_DIR/src/components/$component.tsx"
  else
    echo "Skipping $FRONTEND_DIR/src/components/$component.tsx (already exists)"
  fi
done

# Create API client in src/components/lib
if [ ! -f "$FRONTEND_DIR/src/components/lib/api.ts" ]; then
  cat <<EOL > $FRONTEND_DIR/src/components/lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getPages = async () => {
  const response = await api.get('/api/pages');
  return response.data;
};

export const submitForm = async (data: FormData) => {
  const response = await api.post('/api/forms', data);
  return response.data;
};

export default api;
EOL
  echo "Created $FRONTEND_DIR/src/components/lib/api.ts"
else
  echo "Skipping $FRONTEND_DIR/src/components/lib/api.ts (already exists)"
fi

# Create Supabase client (optional for frontend)
mkdir -p $FRONTEND_DIR/src/lib
if [ ! -f "$FRONTEND_DIR/src/lib/supabase.ts" ]; then
  cat <<EOL > $FRONTEND_DIR/src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
EOL
  echo "Created $FRONTEND_DIR/src/lib/supabase.ts"
else
  echo "Skipping $FRONTEND_DIR/src/lib/supabase.ts (already exists)"
fi

# Create backend directories and files
echo "Updating backend structure in $BACKEND_DIR..."

# Create routes
mkdir -p $BACKEND_DIR/routes
touch $BACKEND_DIR/routes/index.js
touch $BACKEND_DIR/routes/pageRoutes.js
touch $BACKEND_DIR/routes/testimonialRoutes.js
touch $BACKEND_DIR/routes/authRoutes.js

# Create placeholder content for routes
if [ ! -s "$BACKEND_DIR/routes/index.js" ]; then
  cat <<EOL > $BACKEND_DIR/routes/index.js
const express = require('express');
const router = express.Router();

router.use('/forms', require('./formRoutes'));
router.use('/pages', require('./pageRoutes'));
router.use('/testimonials', require('./testimonialRoutes'));
router.use('/auth', require('./authRoutes'));

module.exports = router;
EOL
  echo "Created $BACKEND_DIR/routes/index.js"
else
  echo "Skipping $BACKEND_DIR/routes/index.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/routes/pageRoutes.js" ]; then
  cat <<EOL > $BACKEND_DIR/routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const { getPages, updatePage } = require('../Controllers/pageController');

router.get('/', getPages);
router.put('/:id', updatePage);

module.exports = router;
EOL
  echo "Created $BACKEND_DIR/routes/pageRoutes.js"
else
  echo "Skipping $BACKEND_DIR/routes/pageRoutes.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/routes/testimonialRoutes.js" ]; then
  cat <<EOL > $BACKEND_DIR/routes/testimonialRoutes.js
const express = require('express');
const router = express.Router();
const { getTestimonials, addTestimonial } = require('../Controllers/testimonialController');

router.get('/', getTestimonials);
router.post('/', addTestimonial);

module.exports = router;
EOL
  echo "Created $BACKEND_DIR/routes/testimonialRoutes.js"
else
  echo "Skipping $BACKEND_DIR/routes/testimonialRoutes.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/routes/authRoutes.js" ]; then
  cat <<EOL > $BACKEND_DIR/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login } = require('../Controllers/authController');

router.post('/login', login);

module.exports = router;
EOL
  echo "Created $BACKEND_DIR/routes/authRoutes.js"
else
  echo "Skipping $BACKEND_DIR/routes/authRoutes.js (already exists)"
fi

# Create controllers
mkdir -p $BACKEND_DIR/Controllers
touch $BACKEND_DIR/Controllers/pageController.js
touch $BACKEND_DIR/Controllers/testimonialController.js
touch $BACKEND_DIR/Controllers/authController.js

# Create placeholder content for controllers
if [ ! -s "$BACKEND_DIR/Controllers/pageController.js" ]; then
  cat <<EOL > $BACKEND_DIR/Controllers/pageController.js
const getPages = async (req, res) => {
  // Implement Supabase query
  res.json({ message: 'Get pages' });
};

const updatePage = async (req, res) => {
  // Implement Supabase update
  res.json({ message: 'Update page' });
};

module.exports = { getPages, updatePage };
EOL
  echo "Created $BACKEND_DIR/Controllers/pageController.js"
else
  echo "Skipping $BACKEND_DIR/Controllers/pageController.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/Controllers/testimonialController.js" ]; then
  cat <<EOL > $BACKEND_DIR/Controllers/testimonialController.js
const getTestimonials = async (req, res) => {
  // Implement Supabase query
  res.json({ message: 'Get testimonials' });
};

const addTestimonial = async (req, res) => {
  // Implement Supabase insert
  res.json({ message: 'Add testimonial' });
};

module.exports = { getTestimonials, addTestimonial };
EOL
  echo "Created $BACKEND_DIR/Controllers/testimonialController.js"
else
  echo "Skipping $BACKEND_DIR/Controllers/testimonialController.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/Controllers/authController.js" ]; then
  cat <<EOL > $BACKEND_DIR/Controllers/authController.js
const login = async (req, res) => {
  // Implement Supabase Auth
  res.json({ message: 'Login' });
};

module.exports = { login };
EOL
  echo "Created $BACKEND_DIR/Controllers/authController.js"
else
  echo "Skipping $BACKEND_DIR/Controllers/authController.js (already exists)"
fi

# Create middleware
mkdir -p $BACKEND_DIR/middleware
touch $BACKEND_DIR/middleware/authMiddleware.js
touch $BACKEND_DIR/middleware/errorHandler.js

# Create placeholder content for middleware
if [ ! -s "$BACKEND_DIR/middleware/authMiddleware.js" ]; then
  cat <<EOL > $BACKEND_DIR/middleware/authMiddleware.js
const { supabase } = require('../config/supabase');

const authMiddleware = async (req, res, next) => {
  // Implement Supabase JWT verification
  next();
};

module.exports = authMiddleware;
EOL
  echo "Created $BACKEND_DIR/middleware/authMiddleware.js"
else
  echo "Skipping $BACKEND_DIR/middleware/authMiddleware.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/middleware/errorHandler.js" ]; then
  cat <<EOL > $BACKEND_DIR/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
};

module.exports = errorHandler;
EOL
  echo "Created $BACKEND_DIR/middleware/errorHandler.js"
else
  echo "Skipping $BACKEND_DIR/middleware/errorHandler.js (already exists)"
fi

# Create config directory
mkdir -p $BACKEND_DIR/config
touch $BACKEND_DIR/config/supabase.js
touch $BACKEND_DIR/config/sendgrid.js

# Create placeholder content for config
if [ ! -s "$BACKEND_DIR/config/supabase.js" ]; then
  cat <<EOL > $BACKEND_DIR/config/supabase.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
EOL
  echo "Created $BACKEND_DIR/config/supabase.js"
else
  echo "Skipping $BACKEND_DIR/config/supabase.js (already exists)"
fi

if [ ! -s "$BACKEND_DIR/config/sendgrid.js" ]; then
  cat <<EOL > $BACKEND_DIR/config/sendgrid.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;
EOL
  echo "Created $BACKEND_DIR/config/sendgrid.js"
else
  echo "Skipping $BACKEND_DIR/config/sendgrid.js (already exists)"
fi

# Create .env file (if not exists, with placeholder content)
if [ ! -f "$BACKEND_DIR/.env" ]; then
  cat <<EOL > $BACKEND_DIR/.env
# Backend environment variables
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
SENDGRID_API_KEY=your_sendgrid_api_key
PORT=3001
EOL
  echo "Created $BACKEND_DIR/.env"
else
  echo "Skipping $BACKEND_DIR/.env (already exists)"
fi

# Create .gitignore in root (if not exists)
if [ ! -f ".gitignore" ]; then
  cat <<EOL > .gitignore
node_modules/
.env
dist/
build/
.next/
EOL
  echo "Created .gitignore"
else
  echo "Skipping .gitignore (already exists)"
fi

# Update index.js in backend to use new routes and middleware
if [ ! -s "$BACKEND_DIR/index.js" ]; then
  cat <<EOL > $BACKEND_DIR/index.js
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes'));

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
EOL
  echo "Created/Updated $BACKEND_DIR/index.js"
else
  echo "Skipping $BACKEND_DIR/index.js (already exists, manual update may be needed)"
fi

echo "File structure update complete!"
