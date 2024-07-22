export default function Contact() {
    return (
        <main class="container mx-auto px-4 py-6 mt-4">
        <h2 class="text-4xl font-bold mb-4">Contact Us</h2>
        <form class="w-full max-w-lg">
            <div class="d-flex items-center mb-4">
                <label for="name" class="me-3">Name:</label>
                <input type="text" id="name" class="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div class="d-flex items-center mb-4">
                <label for="email" class="me-3">Email:</label>
                <input type="email" id="email" class="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div class="d-flex items-center mb-4">
                <label for="message" class="me-3">Message:</label>
                <textarea id="message" class="border rounded px-2 py-1" rows="4"></textarea>
            </div>
            <button class="bg-primary text-white border-white  fw-bold py-2 px-4 rounded">Submit</button>
        </form>
    </main>
    );
}
