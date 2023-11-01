FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["learningNETwebApp/learningNETwebApp.csproj", "learningNETwebApp/"]
RUN dotnet restore "learningNETwebApp/learningNETwebApp.csproj"
COPY . .
WORKDIR "/src/learningNETwebApp"
RUN dotnet build "learningNETwebApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "learningNETwebApp.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "learningNETwebApp.dll"]
