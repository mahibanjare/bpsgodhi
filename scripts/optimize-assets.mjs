/**
 * One-off asset optimizer.
 * Shrinks the oversized logo (10 MB) into web-ready sizes and favicons,
 * and produces an optimized campus photo + OG image.
 * Run with: node scripts/optimize-assets.mjs
 */
import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const PUB = path.resolve('public')
const SRC = path.resolve('design-source')
const LOGO = path.join(SRC, 'logo-original.png')

async function findCampusPhoto() {
  const files = await readdir(SRC)
  const jpg = files.find(f => /campus/i.test(f) && /\.(jpe?g)$/i.test(f))
  return jpg ? path.join(SRC, jpg) : null
}

async function run() {
  // --- Logo: trim transparent/solid border, export crisp web sizes ---
  await sharp(LOGO)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(path.join(PUB, 'logo-web.png'))
  console.log('✓ logo-web.png (512px)')

  await sharp(LOGO).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(PUB, 'apple-touch-icon.png'))
  console.log('✓ apple-touch-icon.png (180px)')

  await sharp(LOGO).resize(48, 48).png({ compressionLevel: 9 }).toFile(path.join(PUB, 'favicon.png'))
  console.log('✓ favicon.png (48px)')

  await sharp(LOGO).resize(192, 192).png({ compressionLevel: 9 }).toFile(path.join(PUB, 'icon-192.png'))
  await sharp(LOGO).resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(PUB, 'icon-512.png'))
  console.log('✓ pwa icons (192 / 512)')

  // --- Campus photo: optimized + OG image ---
  const photo = await findCampusPhoto()
  if (photo) {
    await sharp(photo)
      .resize(1280, null, { withoutEnlargement: true })
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(path.join(PUB, 'campus.jpg'))
    console.log('✓ campus.jpg (web-optimized)')

    await sharp(photo)
      .resize(1200, 630, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(path.join(PUB, 'og-image.jpg'))
    console.log('✓ og-image.jpg (1200x630)')
  } else {
    console.warn('! campus photo not found, skipped')
  }
}

run().catch(e => { console.error(e); process.exit(1) })
