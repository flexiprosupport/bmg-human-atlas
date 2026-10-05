# Anatomy data attribution

BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.

- License: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html (updated 2025-02-27)
- Dataset: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
- License terms: https://creativecommons.org/licenses/by/4.0/
- Source geometry: `isa_BP3D_4.0_obj_99.zip`, BodyParts3D 4.0.
- English names and relationships: IS-A and PART-OF concept, element, and inclusion tables from the same archive.
- Publication: Mitsuhashi et al. (2009), BodyParts3D: 3D structure database for anatomical concepts. https://doi.org/10.1093/nar/gkn613

Adaptations: axes and units converted from millimeters/Z-up to meters/Y-up; translated to rest at the stage; geometry simplified using meshoptimizer with 0.2% relative error limit per structure; normals quantized to signed 16-bit; packed into binary chunks; curated display system groupings and colors. The source contains 2,234 individual OBJ meshes; all remain represented. The combined hierarchy contains 3,432 named FMA concepts, which may reference multiple meshes. Original source identity is preserved in the manifest.

Source OBJ comments mention an older CC BY-SA 2.1 Japan license. The official current database license linked above supersedes that legacy text and explicitly permits redistribution and adaptation under CC BY 4.0.

BodyParts3D represents an adult male reference anatomy based on TARO MRI and anatomical illustration refinements. It is not a complete model of every possible human anatomical structure or variation. This interface is educational and is not a clinical tool.

## Female model (included in this release)

The female anatomy model is **Female Atlas v2.0**. Model integration and adaptations by Mahendra Beniwal, [Female Atlas](https://github.com/HiMahendraBeniwal/female-atlas). Adapted for local browser delivery in BMG Atlas; geometry is repacked, optimized, and four knee structures are repositioned in the viewer. Female model geometry and adaptations are redistributed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

- Human Reference Atlas / HuBMAP: Kristen Browne and Heidi Schlehlein, *3D Reference Organ Set for Female v1.5* (2023). DOI: https://doi.org/10.48539/HBM352.BTSQ.586
- Dataset: https://lod.humanatlas.io/ref-organ/united-female/v1.5
- BodyParts3D: © The Database Center for Life Science (DBCLS), CC BY 4.0.
- License: https://creativecommons.org/licenses/by/4.0/
- 3,004 structures and 2,557 named concepts. Pregnancy reference structures are separate and hidden by default.
