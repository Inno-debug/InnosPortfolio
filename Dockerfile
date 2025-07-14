FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy all files
COPY . .

# Go to project folder and list files (debugging)
RUN ls -la InnosPortfolio/InnosPortfolio

# Try to publish (this is likely where it's failing)
WORKDIR /app/InnosPortfolio
RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/InnosPortfolio/out ./

ENTRYPOINT ["dotnet", "InnosPortfolio.dll"]

