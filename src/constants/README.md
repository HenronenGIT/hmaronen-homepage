# Constants Documentation

This directory contains all the global constants and design system definitions for the project.

## Files Overview

- `colors.ts` - Color system configuration
- `typography.ts` - Typography system configuration
- `links.ts` - Social media and external links
- `index.ts` - Central export file

## Typography System

The typography system provides a centralized way to manage all text styles across the project. It includes:

### 1. Typography Constants (`typography.ts`)

The `TYPOGRAPHY` object contains:
- Font families
- Font weights
- Text sizes (including responsive variants)
- Line heights
- Letter spacing
- Typography presets for common text styles

### 2. React Components (`../components/ui/Typography.tsx`)

Semantic typography components for easy usage:

```tsx
import { H1, H2, Body, Caption, SectionTitle } from '@/components/ui/Typography';

// Usage examples
<H1 accent>Main Heading</H1>
<SectionTitle>Section Title</SectionTitle>
<Body>Regular paragraph text</Body>
<Caption>Small caption text</Caption>
```

### 3. CSS Classes (`../index.css`)

CSS utility classes for direct usage:

```tsx
<h1 className="text-h1">Heading</h1>
<p className="text-body">Paragraph</p>
<span className="text-caption">Caption</span>
```

### 4. Helper Functions

- `combineTypography()` - Combine multiple typography classes
- `getTypographyPreset()` - Get preset with optional overrides

## Usage Examples

### Component-based approach (Recommended)
```tsx
import { H2, Body, Metadata } from '@/components/ui/Typography';

<H2 accent>About Me</H2>
<Body>This is a paragraph with consistent styling.</Body>
<Metadata>2023 — PRESENT</Metadata>
```

### Class-based approach
```tsx
<h2 className="text-h2" style={{ color: COLORS.primary }}>About Me</h2>
<p className="text-body">This is a paragraph with consistent styling.</p>
<p className="text-metadata">2023 — PRESENT</p>
```

### Manual combination
```tsx
import { TYPOGRAPHY, getTypographyPreset } from '@/constants/typography';

const customClasses = getTypographyPreset('h2', 'text-center mb-4');
<h2 className={customClasses}>Centered heading with margin</h2>
```

## Benefits

1. **Consistency** - All typography follows the same design system
2. **Maintainability** - Changes to typography happen in one place
3. **Type Safety** - TypeScript ensures correct preset usage
4. **Flexibility** - Multiple ways to use the system
5. **Responsive** - Built-in responsive typography scales

## Migration Guide

When refactoring existing components:

### Before:
```tsx
<h2 className="text-4xl md:text-5xl font-bold font-heading">
  About <span style={{ color: COLORS.primary }}>Me</span>
</h2>
```

### After:
```tsx
<H2>About <span style={{ color: COLORS.primary }}>Me</span></H2>
// OR
<H2>About <H2 as="span" accent>Me</H2></H2>
```

# Color System Documentation

This project uses a centralized color system to maintain consistency and make it easier to update colors across the entire application.

## Using Colors

Import colors from the constants:

```typescript
import { COLORS } from "@/constants/colors";
// or
import { primary, primaryAlpha, gradients } from "@/constants/colors";
```

## Available Colors

### Primary Brand Color
- `COLORS.primary` - Main teal color (#4FD1C7)
- `COLORS.primaryHover` - Darker version for hover states (#3FBDB3)

### Primary with Transparency
- `COLORS.primaryAlpha[5]` - 5% opacity
- `COLORS.primaryAlpha[10]` - 10% opacity
- `COLORS.primaryAlpha[15]` - 15% opacity
- `COLORS.primaryAlpha[20]` - 20% opacity
- `COLORS.primaryAlpha[25]` - 25% opacity
- `COLORS.primaryAlpha[30]` - 30% opacity

### Gradients
- `COLORS.gradients.primary` - Light gradient
- `COLORS.gradients.primaryMedium` - Medium gradient
- `COLORS.gradients.primaryStrong` - Strong gradient

### Backgrounds
- `COLORS.background.main` - Main dark background
- `COLORS.background.section` - Light section background

### Shadows
- `COLORS.shadows.primary` - Standard shadow
- `COLORS.shadows.primaryMedium` - Medium shadow
- `COLORS.shadows.primaryStrong` - Strong shadow

### Social Media Colors
- `COLORS.social.linkedin` - LinkedIn brand color

## Helper Functions

### withAlpha
Convert any hex color to rgba with custom alpha:

```typescript
import { withAlpha } from "@/constants/colors";

const customColor = withAlpha("#FF0000", 0.5); // rgba(255, 0, 0, 0.5)
```

## Usage Examples

```typescript
// Using in inline styles
<div style={{ color: COLORS.primary }}>Text</div>

// Using with hover effects
onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = COLORS.primary;
  e.currentTarget.style.boxShadow = COLORS.shadows.primary;
}}

// Using gradients
<div style={{ background: COLORS.gradients.primaryMedium }}>Content</div>
```

## Benefits

1. **Consistency** - All colors are defined in one place
2. **Easy Updates** - Change colors globally by updating the constants
3. **Type Safety** - TypeScript will catch typos in color names
4. **Better Maintenance** - No scattered hardcoded colors throughout the codebase