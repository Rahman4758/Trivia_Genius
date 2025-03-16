import cors from "cors";

const corsOptions = {
    origin: "https://lovable.dev/projects/6ed2da08-fc35-4423-9dae-0837560f32e0", // Change to frontend URL in production
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

export default cors(corsOptions);
