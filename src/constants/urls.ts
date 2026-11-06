export const discordUrl: String = "https://discord.spigotrce.xyz/";

export const dashboardUrl: String = "https://dash.nebulaobf.dev/";
export const dashUrl: String = "https://dash.nebulaobf.dev/";

export type Sample = {
  name: string;
  originalUrl?: string;
  protectedUrl?: string;
  githubUrl?: string;
  info: string;
};

export const samples: Sample[] = [
  {
    name: "SnakeGame",
    originalUrl: "https://cdn.spigotrce.xyz/files/nebula-snake_game-original.jar",
    protectedUrl: "https://cdn.spigotrce.xyz/files/nebula-snake_game-out.jar",
    githubUrl: "https://github.com/spigotRCE/snakegame",
    info: "A Snake Game from GitHub.",
  },
];
