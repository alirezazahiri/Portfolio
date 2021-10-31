const withPage = (Component: JSX.Element): React.FC => {
    return () => {
        return <Component />;
    };
};

export default withPage;
