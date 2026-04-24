export const loader = async () => {
    return new Response("{}", {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
        },
    });
};

const ChromeDevtoolsRoute = () => null;

export default ChromeDevtoolsRoute;