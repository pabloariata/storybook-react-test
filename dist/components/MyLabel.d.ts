/// <reference types="react" />
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
    allCaps?: boolean;
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string;
    /**
    * Color personalizado del fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
