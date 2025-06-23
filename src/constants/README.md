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