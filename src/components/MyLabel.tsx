import './MyLabel.css';

export interface MyLabelProps {
    /**
    * Mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Para capitalizar la etiqueta
    */
    allCaps?: boolean
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string

    /**
    * Color personalizado del fondo
    */
    backgroundColor?: string
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
        style={{color: fontColor, backgroundColor}}
        className={ `label ${ size } text-${color}` }
    >
        {(allCaps)? label.toUpperCase() : label}
    </span>
  )
}
