interface Errores {
  errors: string | undefined;
  touched: boolean | undefined;
}

export const Errors = (props: Errores) => {
  return (
    <p className="text-sm text-red-500">
      {props.errors !== null &&
        props.errors !== undefined &&
        props.errors !== '' &&
        props.touched !== null &&
        props.touched !== undefined &&
        props.touched && <span className="text-red-500 block mt-1 pl-1">{props.errors}</span>}
    </p>
  )
}