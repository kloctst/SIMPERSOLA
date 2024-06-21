document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const contents = e.target.result;
                    console.log('File contents:', contents);
                    // Process the file contents here
                };
                reader.readAsText(file);
            }
        }

        function exportFile() {
            const data = { name: "John", age: 30, city: "New York" };
            const jsonString = JSON.stringify(data);
            const blob = new Blob([jsonString], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "data.json";
            a.click();
            URL.revokeObjectURL(url);
        }