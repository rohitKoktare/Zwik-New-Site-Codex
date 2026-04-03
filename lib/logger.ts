const isDevelopment = process.env.NODE_ENV === "development";

type LogLevel = "info" | "warn" | "error";

function write(level: LogLevel, message: string, meta?: unknown) {
  if (!isDevelopment) {
    return;
  }

  const prefix = `[zwik:${level}]`;

  if (meta === undefined) {
    console[level](`${prefix} ${message}`);
    return;
  }

  console[level](`${prefix} ${message}`, meta);
}

export const logger = {
  info: (message: string, meta?: unknown) => write("info", message, meta),
  warn: (message: string, meta?: unknown) => write("warn", message, meta),
  error: (message: string, meta?: unknown) => write("error", message, meta),
};
