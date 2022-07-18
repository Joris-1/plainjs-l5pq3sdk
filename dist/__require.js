
const modules = ['@vladmandic/human'];
export default function require(library) {
  const idx = modules.findIndex(
    (it) =>
      it === library ||
      it.replace(/^((@[^/]*\/)?[^/@]*)(@[^/]*)?(\/[^@]*)?$/, '$1$4') ===
        library // removes version pinned, if any
  );
  if (idx === -1) throw new Error(`Import ${library} not found in project scope: ${modules}`);
  return import(`https://srv.divriots.com/packd/@vladmandic/human`).then((module) => module['packd_export_'+idx]);
}