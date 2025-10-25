class UserClient {
    private baseUrl = 'https://jsonplaceholder.typicode.com';
    

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getUsers<T>(): Promise<T[]> {
        const response = await fetch(`${this.baseUrl}/users`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return response.json();
    }

    async getUser<T>(id: number): Promise<T> {
        const response = await fetch(`${this.baseUrl}/users/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    }
}

export default UserClient;