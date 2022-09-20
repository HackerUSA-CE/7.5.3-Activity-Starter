import { waitFor, render, screen } from "@testing-library/react"
import App from "./App"

beforeEach(() => {
    //reset to initial state
    fetch.resetMocks();
})

describe("receive values from github REST API using jest fetch mock", () => {
    test("receives GitHub name", async () => {
        fetch.mockResponseOnce(JSON.stringify({name: "Menegoth"}));
        render(<App />);
        const gitHubName = await waitFor(() => screen.getByRole("heading", { level: 2 }));
        expect(gitHubName).toHaveTextContent("Menegoth")
    });

    test("receives GitHub URL", async () => {
        fetch.mockResponseOnce(JSON.stringify({html_url: "https://github.com/Menegoth"}));
        render(<App />);
        const gitHubURL = await waitFor(() => screen.getByRole("link"));
        expect(gitHubURL).toHaveAttribute("href", expect.stringContaining("github.com"));
    });

    test("receives GitHub profile picture URL", async () => {
        fetch.mockResponseOnce(JSON.stringify({avatar_url: "https://avatars.githubusercontent.com/u/10967933?v=4"}));
        render(<App />);
        const gitHubAvatarURL = await waitFor(() => screen.getByAltText("Github profile image"));
        expect(gitHubAvatarURL).toHaveAttribute("src", expect.stringContaining("githubusercontent"));
    });
});