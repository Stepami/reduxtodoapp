import { FunctionComponent } from 'react'

interface IConditionalWrapperProps {
    condition: boolean;
    wrapper: (elem: JSX.Element) => JSX.Element;
    children: JSX.Element;
}

const ConditionalWrapper: FunctionComponent<IConditionalWrapperProps> = (props: IConditionalWrapperProps) =>
    props.condition ? props.wrapper(props.children) : props.children

export default ConditionalWrapper