const integrations = {
  isOpenAIEnabled: true,
};

const messages = {
  opanAi: (
    <div style={{ whiteSpace: "pre-wrap" }}>
      OpenAI is not enabled. Follow the{" "}
      <a
        href="https://nextjstemplates.com/docs/enableintegration"
        className="text-primary underline"
      >
        documentation
      </a>{" "}
      to enable it.
    </div>
  ),
};

export { integrations, messages };
