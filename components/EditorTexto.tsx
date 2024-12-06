import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

const EditorTexto = ({ descripcion, setDescripcion }: { descripcion: string; setDescripcion: (content: string) => void }) => {
  const { theme, systemTheme } = useTheme() // Obtener el tema actual y el tema del sistema
  const editorRef = useRef<any>(null)

  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    // Cargar el script de TinyMCE de forma dinámica
    const script = document.createElement('script')
    script.src = '/tinymce/tinymce.min.js' // Cargar TinyMCE desde la carpeta pública
    script.onload = () => {
      // @ts-ignore
      window.tinymce.init({
        selector: '#myEditor',
        height: 500,
        menubar: false,
        skin: currentTheme === 'dark' ? 'oxide-dark' : 'oxide', // Cambiar el skin según el tema
        content_css:
          currentTheme === 'dark'
            ? '/tinymce/skins/content/tinymce-5-dark/content.min.css'
            : '/tinymce/skins/content/tinymce-5-light/content.min.css', // Cambiar el CSS de contenido según el tema
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount'
        ],
        toolbar:
          'undo redo | forecolor backcolor formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ',
        setup: (editor: any) => {
          editorRef.current = editor // Guardar la referencia al editor
          editor.on('change', function () {
            setDescripcion(editor.getContent()) // Actualiza el contenido en el estado al cambiar
          })
        }
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      // @ts-ignore
      if (window.tinymce) {
        // @ts-ignore
        window.tinymce.remove() // Eliminar el editor cuando el componente se desmonte
      }
    }
  }, [setDescripcion, currentTheme])

  // Actualizar el editor cuando el tema cambia
  useEffect(() => {
    // Destruir el editor y reiniciarlo con la configuración correcta del tema
    if (editorRef.current) {
      // @ts-ignore
      window.tinymce.remove(editorRef.current) // Destruir el editor actual
    }

    // Re-inicializar el editor con la configuración del tema actualizado
    const script = document.createElement('script')
    script.src = '/tinymce/tinymce.min.js' // Cargar TinyMCE desde la carpeta pública
    script.onload = () => {
      // @ts-ignore
      window.tinymce.init({
        selector: '#myEditor',
        height: 500,
        menubar: false,
        skin: currentTheme === 'dark' ? 'oxide-dark' : 'oxide', // Cambiar el skin según el tema
        content_css:
          currentTheme === 'dark' ? '/tinymce/skins/content/tinymce-5-dark/content.min.css' : '/tinymce/skins/content/tinymce-5/content.min.css', // Cambiar el CSS de contenido según el tema
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount'
        ],
        toolbar:
          'undo redo | forecolor backcolor formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ',
        setup: (editor: any) => {
          editorRef.current = editor // Guardar la referencia al editor
          editor.on('change', function () {
            setDescripcion(editor.getContent()) // Actualiza el contenido en el estado al cambiar
          })
        }
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      // @ts-ignore
      if (window.tinymce) {
        // @ts-ignore
        window.tinymce.remove() // Eliminar el editor cuando el componente se desmonte
      }
    }
  }, [currentTheme, setDescripcion]) // Reaccionar ante cambios en el tema

  return (
    <div>
      <textarea id="myEditor" defaultValue={descripcion}></textarea>
    </div>
  )
}

export default EditorTexto
