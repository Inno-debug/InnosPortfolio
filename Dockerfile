# ---------- Build stage ----------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy everything into the container
COPY . ./

# Publish the app (output will include wwwroot)
RUN dotnet publish InnosPortfolio/InnosPortfolio.csproj -c Release -o /app/publish

# ---------- Runtime stage ----------
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy the published app from build stage
COPY --from=build /app/publish ./

# Run the app
ENTRYPOINT ["dotnet", "InnosPortfolio.dll"]


