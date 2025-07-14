# Use the official .NET SDK image to build and publish the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy everything and publish
COPY . . 
WORKDIR /app/InnosPortfolio
RUN dotnet publish InnosPortfolio.csproj -c Release -o /app/out

# Use the ASP.NET runtime image to run the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/InnosPortfolio/out ./

# Run the app
ENTRYPOINT ["dotnet", "InnosPortfolio/out/InnosPortfolio.dll"]
