module.exports = {
    stories: ["../src/**/*.stories.mdx"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        {
            name: "@storybook/addon-docs/preset",
            options: {
                configureJSX: true,
                babelOptions: {
                    plugins: [
                        [
                            "@babel/plugin-transform-react-jsx",
                            {
                                pragmaFrag: "React.Fragment"
                            },
                            "storybook-transform-jsx"
                        ]
                    ]
                },
                sourceLoaderOptions: null
            }
        }
    ]
};
