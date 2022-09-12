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
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor
}: MyLabelProps) => {
  return (
    <span 
        style={{color: fontColor}}
        className={ `label ${ size } text-${color}` }
    >
        {(allCaps)? label.toUpperCase() : label}
    </span>
  )
}
