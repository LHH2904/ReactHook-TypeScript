import {ReactNode} from "react";

/**
 * HeadingProps defines the props for the `Heading` component.
 * It ensures that the `title` prop is a string.
 */
interface HeadingProps {
    title: string;
}

/**
 * `Heading` is a functional component that takes `HeadingProps` as its props.
 * It renders a <h3> element containing the title passed in as the `title` prop.
 */
export const Heading = ({ title }: HeadingProps) => {
    return <h3>{title}</h3>;
};

/**
 * `ListComponent` is a type alias for a generic component.
 * It takes an array of items (of type `ListItem[]`) and a `render` function.
 * The `render` function is used to render each item in the list.
 * The generic `ListItem` allows for reusing this component with various data types.
 */
type ListComponent = <ListItem,>({
 items,
 render,
}: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
}) => ReactNode;

/**
 * `List` is a component that accepts an array of `items` and a `render` function as props.
 * It renders each item in an unordered list (`<ul>`) by calling the `render` function for each item.
 * This component uses the generic type `ListItem` to handle any type of data passed in the `items` array.
 */
export const List: ListComponent = ({items, render}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{render(item)}</li>
            ))}
        </ul>
    );
};

/**
 * TestComponent uses `Heading` and `List`.
 * displays a heading "Hello" and a list of items: 'a', 'b', 'c'.
 * item is rendered using a <strong> tag
 */
function TestComponent() {
    return (
        <div>
            <Heading title="Hello" />
            <List items={['a', 'b', 'c']} render={(str)=> <strong>{str}</strong>}/>
        </div>
    )
}

export default TestComponent;