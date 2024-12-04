---
title: Frequently Asked Questions
description: Common questions about using Ikaros
---

### What is Ikaros?

**Ikaros** [Ίκαρος] is a personal content manager (CMS) dedicated to ACGMN, designed to conveniently manage your ACGMN content.

### How can I import existing resources?

For existing resource files, you can use the local import plugin. To import resources, follow these steps:

1. Install the local import plugin and start it.
2. In the NAS web console file manager, move your existing resources to the links directory of Ikaros.
3. In the Ikaros backend, stop and then start the local import plugin. This process may take some time as Ikaros will import all the files from the links directory. By default, they are symbolic links, and if symbolic linking fails, they will be copied.
4. After a while, when the Ikaros backend can be accessed normally, it means that the import is complete. You will be able to see the corresponding files in the Ikaros backend.
5. In the NAS console file manager, move the files from the links directory back to their original location.

After importing resources, follow these steps:

6. In the Ikaros backend, add the corresponding entry.
7. Go to the entry details to bind the resources.
