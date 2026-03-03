# 🎵 Sound Effects Folder

Place your sound effects here!

## Required File

- `sword-clash.mp3` - Plays when swords impact

## Supported Formats

- `.mp3` (recommended)
- `.wav`
- `.ogg`

## Where to Get Sounds

### 🎵 Free Sound Effect Sites

**Best Sources:**
- [Freesound.org](https://freesound.org) - Search "sword clash" or "metal hit"
- [Zapsplat.com](https://www.zapsplat.com) - Free SFX with account
- [Mixkit.co](https://mixkit.co/free-sound-effects/) - No attribution required
- [YouTube Audio Library](https://studio.youtube.com) - Free sound effects

### Recommended Search Terms
- "sword clash"
- "metal impact"
- "katana swing"
- "blade hit"
- "sword fight"

## Audio Guidelines

- **Format:** MP3 or WAV
- **Length:** 0.5-2 seconds (short impact)
- **Volume:** Medium-loud (0.5 in code)
- **File size:** Under 500KB

## Example Structure

```
sounds/
  sword-clash.mp3       (Required)
  victory-fanfare.mp3   (Optional - add custom sounds)
  ambient-wind.mp3      (Optional)
```

## Testing Your Sounds

After adding sounds:
1. Restart dev server: `npm run dev`
2. Run the scene and listen for the clash
3. Adjust volume in code if needed

## Add More Sounds

Edit `SamuraiFight.jsx` to add more sound effects:

```jsx
const audio = new Audio('/sounds/your-sound.mp3')
audio.volume = 0.5
audio.play()
```

---

**No sounds yet?** The scene works perfectly without sound! Add them to enhance the experience whenever you're ready.
