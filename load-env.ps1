# load-env.ps1
$envFilePath = ".\.env"

if (Test-Path $envFilePath) {
    Get-Content $envFilePath | ForEach-Object {
        $_.Trim() -match '^([^=]+)=(.*)$' | Out-Null
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        # Set the environment variable for the current session
        [System.Environment]::SetEnvironmentVariable($name, $value, [System.EnvironmentVariableTarget]::Process)
        # Also set the environment variable in the current PowerShell session
        Set-Item -Path "Env:$name" -Value $value

        Write-Output "`$env:$name='$value'"
    }
    Write-Output "Environment variables loaded from .env file."
} else {
    Write-Error "The .env file does not exist at path $envFilePath"
}
