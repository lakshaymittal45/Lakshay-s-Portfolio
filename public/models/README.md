# 🎭 3D Models Folder

Place your 3D samurai models here!

## Required Files

- `samurai-hero.glb` - Your main hero character
- `samurai-enemy.glb` - The opponent character

## Supported Formats

- **.glb** (recommended) - Binary glTF, single file
- **.gltf** - glTF with separate textures

## Where to Get Models

### 🔥 Mixamo (Best Choice)
1. Go to [mixamo.com](https://www.mixamo.com)
2. Search "samurai" or "warrior"
3. Download character in T-Pose
4. Apply animations: "Sword Slash", "Walking"
5. Download as GLB

### 📦 Free Model Sites
- [Sketchfab](https://sketchfab.com) - Filter: Downloadable + Free
- [TurboSquid Free](https://www.turbosquid.com/Search/3D-Models/free/samurai)
- [CGTrader Free](https://www.cgtrader.com/free-3d-models/samurai)

## Model Guidelines

- **Polygon Count:** Under 50k triangles for performance
- **Textures:** 2K or lower resolution
- **Animations:** Embedded in GLB preferred
- **Rigged:** Should have bones/skeleton for animation

## Example Structure

```
models/
  samurai-hero.glb          (2.5 MB)
  samurai-enemy.glb         (2.3 MB)
  samurai-hero-texture.png  (optional if not embedded)
```

## Testing Your Models

After adding models:
1. Restart dev server: `npm run dev`
2. Scene will auto-load your models
3. Check browser console for any errors

## Conversion Tools

If you have FBX or OBJ:
- **Online:** [gltf.report](https://gltf.report)
- **Desktop:** Blender (File → Export → glTF 2.0)

---

**No models yet?** The scene uses stylized placeholder samurai that look great! Add real models whenever you're ready.
