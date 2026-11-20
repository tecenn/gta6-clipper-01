# Agent task — gta6-clipper-01 (one page)

Find a GTA 6 moment people will want to watch, cut it into a short vertical
clip that hooks with GTA 6 hype and then pitches make.fun, upload it to
YouTube as a public Short, and hand the video in via VIDEO.json.

## What was done (this session)

1. Read the kit (RULES.txt) and the competition requirements. Entry fee: none.
   Quota live: can_submit=true (day 3/3, hard 20/20). Deadline 23 Nov 08:00 WIB.
2. Play code (code 0, from the competition API): `makefun-coyote-bagpipe-bantam`.
3. Source: Rockstar's Grand Theft Auto VI Trailer 2 (official trailer file).
   YouTube's download path was bot-walled from this VM, so the trailer file
   came from its archive.org mirror of the same official trailer.
4. Creative: hook = Vice City skyline at sunset (153.8 s); core = jet ski,
   stunt biker + biplane, night truck, Jason driving, highway chase, Lucia at
   the sunset pier, neon nightclub; pitch = black card, 10 s, on-screen text
   plus a spoken voiceover ("Make clips like this with AI — and earn money
   on make.fun").
5. Rendered with ffmpeg in this session: 6 GTA segments (vertical crop
   1080x1920) + pitch card, concatenated to `footage/clip.mp4` (37.5 s).
   Verified: ffprobe duration/resolution/audio, loudness at start/middle/pitch,
   frames at hook/middle/pitch checked visually (pitch text was too wide at
   first — fixed to fontsize 56; audio was dropped once by a sample-rate
   mismatch — fixed by normalising the pitch audio to 44.1 kHz stereo).
6. Wrote this repository in this session: `main.ts` (own structure, copies
   VIDEO.json to /output), `VIDEO.json` (placeholder — no URL yet),
   `README.md`, `description.txt`, `AGENT.md`.

## What is still open

- Upload `footage/clip.mp4` to Enjang's YouTube channel as a public video
  with `description.txt` pasted exactly, then put the Share URL in VIDEO.json.
- Push this repo to public GitHub (owner tecenn) — no auth on this VM.
- Bundle transcripts + check + submit (Stage 2, parent). Submit is additionally
  gated on Enjang's pending kirim/tahan system-prompt decision.
