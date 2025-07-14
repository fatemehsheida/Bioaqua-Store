'use client'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic, List, Heading } from 'ckeditor5';
import { FormatPainter } from 'ckeditor5-premium-features';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function CustomEditor({ initialData, onChange, editor }) {
  return (
    <CKEditor
      editor={editor}
      data={initialData}
      config={{
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDI2MDE1OTksImp0aSI6Ijg2OGNmM2YxLTU3MjUtNDliZi1iNzRhLWVlNDQ0NTc4MDBkYSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImNhNjA2NDIxIn0.gb8hV5LBAtBcOLNFUd2-8miA_VT0Wlqvwm4bHQk5M6y6JgzKJNVur-v8TOIdTGokD2wB_5I3UzqjLjBaryWjyg',
        plugins: [Essentials, Paragraph, Bold, Italic, List, Heading, FormatPainter],
        toolbar: [
          'undo', 'redo', '|',
          'heading', '|',
          'bold', 'italic', '|',
          'bulletedList', 'numberedList', '|',
          'formatPainter'
        ],
        htmlSupport: {
          allow: [
            {
              name: /.*/,
              attributes: true,
              classes: true,
              styles: true
            }
          ]
        }
      }}
      onChange={onChange}
    />
  );
}

export default CustomEditor;